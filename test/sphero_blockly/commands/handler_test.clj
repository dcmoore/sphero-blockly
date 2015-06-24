(ns sphero-blockly.commands.handler-test
  (:require [clojure.java.io :as io]
            [clojure.test :refer :all]
            [ring.mock.request :as mock]
            [sphero-blockly.commands.executer :refer [move-direction]]
            [sphero-blockly.commands.handler :refer :all]
            [sphero-blockly.test-helper :refer [mock-fn]]))

(deftest test-app
  (testing "forward"
    (let [move-direction-invocations (atom [])]
      (with-redefs [move-direction (mock-fn move-direction-invocations "{}")]
        (let [response (command-handler (assoc (mock/request :get "/forward") :params {:speed "1"}))]
          (is (= (:status response) 200))
          (is (= @move-direction-invocations [[:forward "1"]]))))))

  (testing "reverse"
    (let [move-direction-invocations (atom [])]
      (with-redefs [move-direction (mock-fn move-direction-invocations "{}")]
        (let [response (command-handler (assoc (mock/request :get "/reverse") :params {:speed "5040"}))]
          (is (= (:status response) 200))
          (is (= @move-direction-invocations [[:reverse "5040"]]))))))

  (testing "left"
    (let [move-direction-invocations (atom [])]
      (with-redefs [move-direction (mock-fn move-direction-invocations "{}")]
        (let [response (command-handler (assoc (mock/request :get "/left") :params {:speed "11"}))]
          (is (= (:status response) 200))
          (is (= @move-direction-invocations [[:left "11"]]))))))

  (testing "right"
    (let [move-direction-invocations (atom [])]
      (with-redefs [move-direction (mock-fn move-direction-invocations "{}")]
        (let [response (command-handler (assoc (mock/request :get "/right") :params {:speed "5318008"}))]
          (is (= (:status response) 200))
          (is (= @move-direction-invocations [[:right "5318008"]])))))))
