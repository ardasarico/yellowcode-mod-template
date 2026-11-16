import { defineMod } from "yellowcode/mod"

export default defineMod({
  setup(mod) {
    mod.commands.add({
      name: "hello",
      description: "Say hello",
      argumentHint: "[name]",
      run(args) {
        mod.notify(`Hello, ${args || "there"}`)
      },
    })
  },
})
