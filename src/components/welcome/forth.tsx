import s from './WelcomeLayout.module.scss';
import { RouterLink } from 'vue-router';
import { WelcomeLayout } from './WelcomeLayout';
import clound from '../../assets/icons/clound.svg'
export const Forth = () => (
    <WelcomeLayout>
        {{
            icon: () => <img class={s.icon} src={clound} />,
            title: () => <h2>云备份<br />再也不怕数据丢失</h2>,
            buttons: () => <>
                <RouterLink class={s.fake} to="/start" >跳过</RouterLink>
                <RouterLink to="/start" >完成</RouterLink>
                <RouterLink class={s.fake} to="/start" >跳过</RouterLink>
            </>
        }}
    </WelcomeLayout>
)

Forth.displayName = 'Forth'