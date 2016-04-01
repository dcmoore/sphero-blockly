(ns sphero-blockly.main
  (:gen-class)
  (:require
    [sphero-blockly.handler :refer [app]]
    [ring.adapter.jetty :refer [run-jetty]]))

(defn -main [& args]
  (let [port (Integer/parseInt (or (first args) "8000"))]
    (run-jetty app {:port port})))
