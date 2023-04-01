import { mount } from "@vue/test-utils"
import ButtonT from "../src/button"
describe("sum", () => {
  it("可以做加法", () => {
    const wrap = mount(ButtonT, {
      slots: {
        default: "按钮"
      }
    })
    wrap.find("button").trigger("click")
    expect(wrap.emitted("click")).toBeTruthy()
    expect(wrap.html()).toContain("按钮")
  });
  it("disabled", () => {
    const wrap = mount(ButtonT, {
      props: {
        disabled: true
      }
    })
    wrap.find("button").trigger("click")
    expect(wrap.emitted("click")).toBeFalsy()
  });
});
