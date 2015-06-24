(ns sphero-blockly.commands.handler
  (:require [clojure.java.io :as io]
            [compojure.core :refer :all]
            [compojure.route :as route]
            [sphero-blockly.commands.executer :refer [move-direction]]))

(defn- get-speed-from [request]
  (:speed (:params request)))

(defroutes command-handler
  (GET "/forward" request (move-direction :forward (get-speed-from request)))
  (GET "/reverse" request (move-direction :reverse (get-speed-from request)))
  (GET "/left" request (move-direction :left (get-speed-from request)))
  (GET "/right" request (move-direction :right (get-speed-from request))))
