import { RouteLocationNormalizedLoaded, RouterView } from "vue-router";
import { defineComponent, ref, Transition, VNode, watchEffect } from "vue";
import { useSwipe } from "../hooks/useSwipe";
import s from "./Welcome.module.scss";
const pushMap: Record<string, string> = {
  Welcome1: "/welcome/2",
  Welcome2: "/welcome/3",
  Welcome3: "/welcome/4",
  Welcome4: "/items",
};
type Params = { Component: VNode; route: RouteLocationNormalizedLoaded };
export const Welcome = defineComponent({
  setup: (props, context) => {
    const main = ref<HTMLElement | null>(null);
    const { direction, swiping } = useSwipe(main);
    watchEffect(() => {});

    return () => (
      <div class={s.wrapper}>
        <header>
          <svg>
            <use xlinkHref="#logo"></use>
          </svg>
          <h1>神舟记账</h1>
        </header>
        <main class={s.main}>
          <RouterView name="main" ref={main}>
            {({ Component: comp }: Params) => (
              <Transition
                enterFromClass={s.slide_fade_enter_from}
                enterActiveClass={s.slide_fade_enter_active}
                leaveToClass={s.slide_fade_leave_to}
                leaveActiveClass={s.slide_fade_leave_active}
              >
                {comp}
              </Transition>
            )}
          </RouterView>
        </main>
        <footer>
          <RouterView name="footer" />
        </footer>
      </div>
    );
  },
});
export default Welcome;
