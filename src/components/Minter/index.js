import "./style.scss"

const Minter = ({ mintCount, onMintCountChangeHandler, onMinting }) => (
  <div className="minter">
    <div className="minter-wrapper flex flex-column">
      <h1>Mint</h1>
      <p>{`Enter the amount of nipples you would like to buy (5 max):`}</p>

      <div className="minter-wrap flex">
        <input
          className="flex flex-column"
          type="number"
          name="count"
          id="mint-count"
          defaultValue={mintCount}
          onChange={onMintCountChangeHandler}
        />
        <button className="flex flex-column">
          <div className="flex">
            <span>Mint</span>
            {onMinting && (
              <div className="flex">
                <span></span>
                <span></span>
                <span></span>
              </div>
            )}
          </div>
        </button>
        <p>
          Total: <span>{12} ETH</span>
        </p>
      </div>
    </div>
  </div>
)

export default Minter
