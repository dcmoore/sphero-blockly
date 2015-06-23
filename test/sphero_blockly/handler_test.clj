(ns sphero-blockly.handler-test
  (:require [clojure.java.io :as io]
            [clojure.test :refer :all]
            [ring.mock.request :as mock]
            [sphero-blockly.handler :refer :all]))

(deftest test-app
  (testing "main route"
    (let [response (app (mock/request :get "/"))]
      (is (= (:status response) 200))
      (is (= (:body response)
             (slurp (io/resource "public/index.html"))))))

  (testing "not-found route"
    (let [response (app (mock/request :get "/wat-bro"))]
      (is (= (:status response) 404)))))
