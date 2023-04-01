import { computed, defineComponent, toRefs } from "vue";

export default defineComponent({
  name: "Button",
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["click"],
  setup(props, { slots, emit }) {
    const { disabled } = toRefs(props);
    const onClick = (e: Event) => {
      if (disabled.value) return;
      emit("click", e);
    };
    const cls = computed(() => {
      return {
        "btn": true,
        "t-button--theme-primary": true,
        "t-button--disabled": disabled.value,
      };
    })
    return () => (
      <button
        disabled={disabled.value}
        onClick={onClick}
        class={cls.value}
      >
        {slots.default?.()}
      </button>
    );
  },
});
