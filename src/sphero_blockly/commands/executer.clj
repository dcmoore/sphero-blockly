(ns sphero-blockly.commands.executer
  (:require [ellipso.core :as core]
            [ellipso.commands :as commands]))

(def sphero (atom nil))

(defn- ensure-connection []
  (when (nil? @sphero)
    (let [sphero-path (System/getenv "SPHERO_PATH")]
      (prn (str "Attempting to connect to: " sphero-path))
      (reset! sphero (core/connect sphero-path))
      (commands/execute @sphero (commands/back-led 0xff))
      (commands/execute @sphero (commands/colour 0xFF007F))
      sphero)))

(defn- numeric-direction [direction]
  (case direction
    :forward 0
    :right 90
    :reverse 180
    :left 270))

(defn move-direction [direction speed distance]
  (ensure-connection)
  (let [distance (read-string distance)
        distance (if (< 11 distance) 10 distance)
        distance (* distance 1000)
        distance (if (= :forward direction) distance (+ 150 distance))
        speed (read-string speed)
        speed (int (* speed 2.55))
        speed (if (< 256 speed) 255 speed)
        direction (numeric-direction direction)]
    (commands/execute @sphero (commands/roll speed direction))
    (Thread/sleep distance)
    (commands/execute @sphero (commands/roll 0 0))
    (Thread/sleep 1000)))

(defn reset-heading []
  (ensure-connection)
  (commands/execute @sphero (commands/colour 0x000000))
  (commands/execute @sphero (commands/stabilization false))
  (Thread/sleep 5000)
  (commands/execute @sphero (commands/heading 0))
  (commands/execute @sphero (commands/stabilization true))
  (commands/execute @sphero (commands/colour 0xFF007F)))
