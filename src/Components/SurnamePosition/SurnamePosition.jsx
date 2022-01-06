import { CHIEF_FIRST_POSITION, CHIEF_MAN, DRIVER, OPERATOR } from "../../Screens/ParametrsAct/constants";
import "./style.css";

export const SurnamePosition = ({surnamePosition, changeSurnamePosition}) => {
    return (
        <fieldset class="family-und-position">
            <legend>фамилии и должности</legend>
            <section class="position">
                <input
                    name="firstPosition"
                    class="position-input"
                    list="firstPosition"
                    value={surnamePosition.firstPosition ?? CHIEF_FIRST_POSITION}
                    onChange={(e) => { changeSurnamePosition("firstPosition", e.target.value) }}
                />
                <label class="position-label">Должность</label>
                <datalist id="firstPosition">
                    <option value={CHIEF_FIRST_POSITION} />
                    <option value={OPERATOR} />
                </datalist>
                <input
                    name="secondPosition"
                    class="position-input"
                    value={surnamePosition.secondPosition ?? OPERATOR}
                    onChange={(e) => { changeSurnamePosition("secondPosition", e.target.value) }}
                />
                <label class="position-label">Должность</label>
                <input
                    name="thirdPosition"
                    class="position-input"
                    value={surnamePosition.thirdPosition ?? CHIEF_MAN}
                    onChange={(e) => { changeSurnamePosition("thirdPosition", e.target.value) }}
                />
                <label class="position-label">Должность</label>
                <input
                    name="fourthPosition"
                    class="position-input"
                    value={surnamePosition.fourthPosition ?? DRIVER}
                    onChange={(e) => { changeSurnamePosition("fourthPosition", e.target.value) }}
                />
                <label class="position-label">Должность</label>
            </section>
            <section class="family">
                <input
                    name="firstFamily"
                    class="family-name-input"
                    list="firstFamily"
                    value={surnamePosition.firstFamily ?? "Мельников Р.В."}
                    onChange={(e) => { changeSurnamePosition("firstFamily", e.target.value) }}
                />
                <label class="family-name-label">Фамилия</label>
                <datalist id="firstFamily">
                    <option value="Мельников Р.В." />
                    <option value="Никулина Ю.С." />
                    <option value="Петроченко Е.А." />
                    <option value="Дружинина Т.В." />
                    <option value="Львова Е.В." />
                    <option value="Медведева В.Ш." />
                    <option value="Кеслер Ю.В." />
                </datalist>
                <input
                    name="secondFamily"
                    class="family-name-input"
                    list="secondFamily"
                    value={surnamePosition.secondFamily}
                    onChange={(e) => { changeSurnamePosition("secondFamily", e.target.value) }}
                />
                <label class="family-name-label">Фамилия</label>
                <datalist id="secondFamily">
                    <option value="Мельников Р.В." />
                    <option value="Никулина Ю.С." />
                    <option value="Петроченко Е.А." />
                    <option value="Дружинина Т.В." />
                    <option value="Львова Е.В." />
                    <option value="Медведева В.Ш." />
                    <option value="Кеслер Ю.В." />
                </datalist>
                <input
                    name="thirdFamily"
                    class="family-name-input"
                    list="thirdFamily"
                    value={surnamePosition.thirdFamilyFamily}
                    onChange={(e) => { changeSurnamePosition("thirdFamilyFamily", e.target.value) }}
                />
                <label class="family-name-label">Фамилия</label>
                <datalist id="thirdFamily">
                    <option value="Тюлюнева И.С." />
                    <option value="Борисова З.Ю." />
                    <option value="Шегурова Т.И." />
                    <option value="Тюлюнев В.А." />
                    <option value="Бартенев В.Д." />
                    <option value="Стебнев А.В." />
                    <option value="Суслина В.Э." />
                </datalist>
                <input
                    name="fourthFamily"
                    class="family-name-input"
                    list="fourthFamily"
                    value={surnamePosition.fourthFamily}
                    onChange={(e) => { changeSurnamePosition("fourthFamily", e.target.value) }}
                />
                <label class="family-name-label">Фамилия</label>
                <datalist id="fourthFamily">
                    <option value="Чурилов В.В." />
                    <option value="Шевченко С.Н." />
                    <option value="Андреев А.П." />
                    <option value="Андрианов А.С." />
                    <option value="Сергеев С.К." />
                    <option value="Надежкин Е.В." />
                    <option value="Винников А.Д." />
                    <option value="Марандин В.Н." />
                    <option value="Донцов К.А." />
                    <option value="Филиппов Д.А." />
                    <option value="Черепанов М.В." />
                    <option value="с вагона" />
                </datalist>
            </section>
        </fieldset>
    )
}