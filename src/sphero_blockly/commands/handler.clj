(ns sphero-blockly.commands.handler
  (:require [clojure.java.io :as io]
            [compojure.core :refer :all]
            [compojure.route :as route]
            [sphero-blockly.commands.executer :refer [move-direction]]))

(defroutes command-handler
  (GET "/forward" request (move-direction :forward (:speed (:params request))))
  (GET "/reverse" request (move-direction :reverse (:speed (:params request))))
  (GET "/left" request (move-direction :left (:speed (:params request))))
  (GET "/right" request (move-direction :right (:speed (:params request)))))
