import { useDispatch, useSelector } from 'react-redux';
import s from './SearchBox.module.css';
import { selectNameFilter } from "../../redux/filters/selectors";
import { changeFilter } from "../../redux/filters/slice";

const SearchBox = () => {
    const dispatch = useDispatch();
    const filter = useSelector(selectNameFilter);
    const handleChange = (e) => {
        dispatch(changeFilter(e.target.value));
    };
    return (
        <div>
            <label className={s.label}>
                Find contacts by name
                <input className={s.search}
                type="text"
                value={filter}
                onChange={handleChange}
                />
            </label>
        </div>
    );
};

export default SearchBox;