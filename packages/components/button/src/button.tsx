import { defineComponent } from "vue";

export default defineComponent({
    name: "Button",
    props: {

    },
    setup(props, { slots }) {
        return () => (
            <button class="btn">
                {slots.default?.()}
            </button>
        )
    }
})