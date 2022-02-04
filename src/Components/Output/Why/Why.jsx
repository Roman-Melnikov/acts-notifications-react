import "./style.css";

export const Why = ({ dateArrival, airLine, contract }) => {
    const { day, mounthNumber, year } = dateArrival;
    return (
        <>
            <p class="content-why">
                о том, что {`${day}.${mounthNumber}.${year}г.`} со стороны авиаперевозчика,
                а/к «{airLine}»  допущено нарушение условий договора {contract} на перевозку почты 
                воздушным транспортом, выразившееся в следующем:
                (указать конкретно характер нарушения, номер самолета, номер рейса, дату нарушения и т.д.)
            </p>
        </>
    )
}