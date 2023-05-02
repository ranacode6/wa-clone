import { Box, InputBase, styled } from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";

const Component = styled(Box)`
	background: #fff;
	height: 45px;
	border-bottom: 1px solid #e9edef;
	display: flex;
	align-items: center;
`;

const Wrapper = styled(Box)`
	background-color: #f0f2f5;
	position: relative;
	margin: 0 13px;
	width: 100%;
	border-radius: 8px;
`;

const Icon = styled(Box)`
	position: absolute;
	height: 100%;
	padding: 7px 10px;
	color: #54656f;
`;

const InputField = styled(InputBase)`
	width: 100%;
	margin-left: 60px;
	padding: 16px;
	height: 15px;
`;

const Search = ({ setText }) => {
	return (
		<Component>
			<Wrapper>
				<Icon>
					<SearchIcon fontSize="small" />
				</Icon>
				<InputField
					placeholder="Search or start new chat"
					onChange={(e) => setText(e.target.value)}
				/>
			</Wrapper>
		</Component>
	);
};

export default Search;
