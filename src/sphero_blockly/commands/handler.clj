(ns sphero-blockly.commands.handler
  (:require [clojure.java.io :as io]
            [compojure.core :refer :all]
            [compojure.route :as route]
            [sphero-blockly.commands.executer :refer [move-direction]]))

(defn- move [direction request]
  (move-direction direction
                  (:speed (:params request))
                  (:distance (:params request))))

(def success-response {:status 200 :body "Great job!!"})

(defroutes command-handler
  (GET "/forward" request (do (move :forward request) success-response))
  (GET "/reverse" request (do (move :reverse request) success-response))
  (GET "/left" request (do (move :left request) success-response))
  (GET "/right" request (do (move :right request) success-response)))
