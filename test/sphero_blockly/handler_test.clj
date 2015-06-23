(ns sphero-blockly.handler-test
  (:require [clojure.java.io :as io]
            [clojure.test :refer :all]
            [ring.mock.request :as mock]
            [sphero-blockly.commands.handler :refer [command-handler]]
            [sphero-blockly.handler :refer :all]))

(def mock-response {:status 200 :headers {} :body "test-value"})
(defn mock-handler [request] mock-response)

(deftest test-app
  (testing "main route"
    (let [response (app (mock/request :get "/"))]
      (is (= (:status response) 200))
      (is (= (:body response)
             (slurp (io/resource "public/index.html"))))))

  (testing "delegates all /command requests to the command handler"
    (with-redefs [command-handler mock-handler]
      (let [request (mock/request :get "/command/something")
            response (app request)]
        (is (= (:body mock-response)
               (:body response))))))

  (testing "not-found route"
    (let [response (app (mock/request :get "/wat-bro"))]
      (is (= (:status response) 404)))))
