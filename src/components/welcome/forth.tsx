import s from './Welcome.module.scss'
import clound from '../../assets/icons/clound.svg'
export const Forth = () => (
    < div class={s.card}>
        <img class={s.icon} src={clound} />
        <h2>云备份<br />再也不怕数据丢失</h2>
    </div>
)

Forth.displayName = 'Forth' 