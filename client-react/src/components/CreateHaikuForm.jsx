import { useForm } from '../utils/hooks';

function HaikuForm () {
  
  return (
    <form className="create-haiku-form">
      <h2 className="create-haiku-title">
        Create haiku:
      </h2>
      <input placeholder="Enter your first line...">

      </input>
      <input placeholder="Enter your second line...">
      
      </input>
      <input placeholder="Enter your third line...">
      
      </input>
      <button type="submit">
        Publish haiku
      </button>
    </form>
  )
}


export default HaikuForm;