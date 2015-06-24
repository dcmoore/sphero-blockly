(ns sphero-blockly.test-helper)

(defn mock-fn [args-atom return-value]
  (fn [& args]
    (reset! args-atom (conj @args-atom args))
    return-value))
