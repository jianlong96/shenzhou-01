import { defineComponent } from 'vue';
import s from './First.module.scss';
import { RouterLink } from 'vue-router';
import { WelcomeLayout } from './WelcomeLayout';
import clound from '../../assets/icons/clound.svg'
export const Forth = defineComponent({
    setup: (props, context) => {
        return () => (
            <WelcomeLayout>
                {{
                    icon: () => <img class={s.clound} src={clound} />,
                    title: () => <h2>云备份<br />再也不怕数据丢失</h2>,
                    buttons: () => <>
                        <RouterLink class={s.fake} to="/start">跳过</RouterLink>
                        <RouterLink to="/start">完成</RouterLink>
                        <RouterLink class={s.fake} to="/start">跳过</RouterLink>
                    </>
                }}
            </WelcomeLayout>
        )
    }
})