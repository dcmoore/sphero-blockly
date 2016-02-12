(ns sphero-blockly.utils
  (:require [ellipso.core :as core]
            [ellipso.commands :as commands]))

(defn zzz [sleepy-time]
  (Thread/sleep sleepy-time))

(defn ensure-connection [sphero]
  (when (nil? @sphero)
    (let [sphero-path (System/getenv "SPHERO_PATH")]
      (prn (str "Attempting to connect to: " sphero-path))
      (reset! sphero (core/connect sphero-path))
      (commands/execute @sphero (commands/back-led 0xff))
      (commands/execute @sphero (commands/colour 0xFF007F))
      sphero)))
