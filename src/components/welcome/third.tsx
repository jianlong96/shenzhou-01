import s from './Welcome.module.scss'
import echart from '../../assets/icons/echart.svg';
export const Third = () => {
    return (
        < div class={s.card}>
            <img class={s.icon} src={echart} />
            <h2>数据可视化<br />收支一目了然</h2>
        </div>
    )
}

Third.displayName = 'Third'