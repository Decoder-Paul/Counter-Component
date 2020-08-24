import '@servicenow/now-button';

export default (state, { updateState }) => {
	const { tally } = state;
	return (
		<div>
			<h2>My Counter</h2>
				<table>
					<tr>
						<td>
						<now-button label="Increment" icon="" tooltipContent="" variant="secondary-positive" size="md" configAria={{}} on-click={() => updateState({ tally: tally + 1 })}></now-button>
						</td>
						<td>
						<now-button label="Clear" icon="" tooltipContent="" variant="secondary-negative" size="md" configAria={{}} on-click={() => updateState({ tally: 0 })}></now-button>
						</td>
						</tr>
				</table>

					{/* <span>
						<button type="button"  on-click={() =>  updateState({tally: (tally + 1)})}>Increment</button>
					</span>
					<span>
						<button type="button" on-click={() => updateState({tally: 0})}>Clear</button>
					</span> */}
			<div style={{fontWeight: "bold"}}>Value: {tally}</div>
		</div>
	);
};
