export const Reference = ({ forTmsTotalWeight, forTmsEmsWeight, forMonitorinTotalgWeight, thingAmount }) => {
    return (
        <article>
            <section>
                <p>Данные для TMS:</p>
                <span>Общий вес: {forTmsTotalWeight}</span>
                <span>Вес емкостей EMS: {forTmsEmsWeight}</span>
                <span>Общее количество вещей: {thingAmount}</span>
            </section>
            <section>
                <p>Данные для журнала мониторинга:</p>
                <span>Общий вес: {forMonitorinTotalgWeight}</span>
                <span>Общее количество вещей: {thingAmount}</span>
            </section>
        </article>
    )
}