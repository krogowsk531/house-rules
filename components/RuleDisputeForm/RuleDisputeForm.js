const RuleDisputeForm = () => {
  return(
    <section>
      <form>
      <label>Expansion Name: </label>
      <input
        type='text'
        name='expansion'
      />
      <label>Number of players: </label>
      <input
        type='text'
        name='number'
      />
      <label>Gameplay time: </label>
      <input
        type='time'
        name='time'
      />
      <label>Official Rule: </label>
      <input
        type='text'
        name='officialRule'
      />
      <label>Interpretation of Rule: </label>
      <input
        type='text'
        name='InterpretationRule'
      />

        <button>SUBMIT</button>
      </form>
    </section>
  )
}

export default RuleDisputeForm;

//eventually upvote, downvote, and link
