import { mount } from "@vue/test-utils"
import { Button } from "../index"
import { h } from "vue"
describe("sum", () => {
  it("button:click", () => {
    const wrap = mount(Button, {
      slots: {
        default: "按钮"
      }
    })
    wrap.find("button").trigger("click")
    expect(wrap.emitted("click")).toBeTruthy()
  });
  it("button:disabled", () => {
    const wrap = mount(Button, {
      props: {
        disabled: true
      }
    })
    wrap.find("button").trigger("click")
    expect(wrap.emitted("click")).toBeFalsy()
  });
  it("button:slots", () => {
    const wrap = mount(Button, {
      slots: {
        default: h("div", "按钮")
      }
    })
    expect(wrap.text()).toBe("按钮")
    expect(wrap.html()).toMatchSnapshot()
  });
});
