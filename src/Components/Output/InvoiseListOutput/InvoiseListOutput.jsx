import { InvoiseListOutputItem } from "../InvoiseListOutputItem/InvoiseListOutputItem"

export const InvoiseListOutput = ({ invoiseList: invoiseListOutput }) => {
    return (
        <>
            {invoiseListOutput.map((invoiseListOutputItem, index) => {
                return (
                    <>
                        <InvoiseListOutputItem
                            invoiseListOutputItem={invoiseListOutputItem}
                            invoiseListOutputLength={invoiseListOutput.length}
                            index={index} />
                    </>
                )
            })}
        </>
    )
}