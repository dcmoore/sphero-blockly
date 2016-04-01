(ns sphero-blockly.test-helper)

(defn record-invocations-fn [args-atom]
  (fn [& args]
    (reset! args-atom (conj @args-atom args))
    nil))

(defn check-if-invoked-fn [invoked-atom]
  (fn [& args]
    (reset! invoked-atom true)
    nil))