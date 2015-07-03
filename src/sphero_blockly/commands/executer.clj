(ns sphero-blockly.commands.executer
  (:require [ellipso.core :as core]
            [ellipso.commands :as commands]))

(def sphero (atom nil))

(defn- ensure-connection []
  (when (nil? @sphero)
    (let [sphero-path (System/getenv "SPHERO_PATH")]
      (prn (str "Attempting to connect to: " sphero-path))
      (reset! sphero (core/connect sphero-path)))))

(defn- numeric-direction [direction]
  (case direction
    :forward 0
    :right 90
    :reverse 180
    :left 270))

(defn move-direction [direction speed distance]
  (ensure-connection)
  (let [distance (* (read-string distance) 100)
        speed (read-string speed)
        speed (if (< speed 256) speed 255)
        direction (numeric-direction direction)]
    (commands/execute @sphero (commands/roll speed direction))
    (Thread/sleep distance)
    (commands/execute @sphero (commands/roll 0 0))
    (Thread/sleep 1000)))
