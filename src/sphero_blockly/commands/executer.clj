(ns sphero-blockly.commands.executer
  (:require [ellipso.core :as core]
            [ellipso.commands :as commands]))

(def sphero (atom nil))

(def max-user-distance 10)
(def distance-modifier 1000)

(def max-overall-speed 255)
(def speed-modifier 2.55)

(def one-second 1000)

(defn- ensure-connection []
  (when (nil? @sphero)
    (let [sphero-path (System/getenv "SPHERO_PATH")]
      (prn (str "Attempting to connect to: " sphero-path))
      (reset! sphero (core/connect sphero-path))
      (commands/execute @sphero (commands/back-led 0xff))
      (commands/execute @sphero (commands/colour 0xFF007F))
      sphero)))

(defn direction-offset [direction]
  (if (= direction :forward) 0 150))

(defn numeric-direction [direction]
  (case direction
    :forward 0
    :right 90
    :reverse 180
    :left 270))

(defn calculate-distance [user-input]
  (* (min user-input max-user-distance) distance-modifier))

(defn calculate-speed [user-input]
  (let [speed (int (* user-input speed-modifier))]
    (min speed max-overall-speed)))

(defn adjust-distance-for-direction [distance direction]
  (+ distance (direction-offset direction)))

(defn roll [speed direction distance]
  ;; (ensure-connection)
  (commands/execute @sphero (commands/roll speed direction))
  (Thread/sleep distance)
  (commands/execute @sphero (commands/roll 0 0))
  (Thread/sleep one-second))

(defn move-direction [direction speed distance]
  (roll
    (calculate-speed speed)
    (numeric-direction direction)
    (adjust-distance-for-direction
      (calculate-distance distance) direction)))

(defn reset-heading []
  ;; (ensure-connection)
  (commands/execute @sphero (commands/colour 0x000000))
  (commands/execute @sphero (commands/stabilization false))
  (Thread/sleep 5000)
  (commands/execute @sphero (commands/heading 0))
  (commands/execute @sphero (commands/stabilization true))
  (commands/execute @sphero (commands/colour 0xFF007F)))

