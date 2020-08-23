import '@servicenow/now-button';
export default (state, { updateState }) => {
	const { tally } = state;
	return (
		<div>
			<h2>Click Counter</h2>
				<table>
					<tr>
						<td>
						<now-button label="increment" icon="" tooltipContent="" variant="primary" size="md" configAria={{}} on-click={() => updateState({ tally: tally + 1 })}></now-button>
						</td>
						<td>
						<now-button label="Clear" icon="" tooltipContent="" variant="primary" size="md" configAria={{}} on-click={() => updateState({ tally: 0 })}></now-button>
						</td>
						</tr>
				</table>
					
					{/* <button class="inlin"
					type="button"
					on-click={() => updateState({tally: tally + 1})}>
					Increment
					</button> */}
				
					{/* <button class="inlin" type="button" on-click={() => updateState({tally: 0})}>
					Clear
					</button> */}
			<div>Value: {tally}</div>
		</div>
	);
};
