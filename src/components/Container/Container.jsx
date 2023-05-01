import './Container.css';
import InputField from '../InputField/InputField';

const Container = () => {
    return (
        <div className='Container'>
            <h1 className='heading'>Todo List</h1>
            <InputField />
        </div>
    )
}

export default Container;