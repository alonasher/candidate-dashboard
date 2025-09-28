import { TextField, MenuItem, FormControl, InputLabel, Select, Button, Stack, SxProps} from "@mui/material";

interface CandidateFiltersProps {
  name: string;
  setName: (value: string) => void;
  position: string;
  setPosition: (value: string) => void;
  status: string;
  setStatus: (value: string) => void;
  experienceYears: string;
  setExperienceYears: (value: string) => void;
  positions: string[];
  statusOptions: string[];
  onClickReset: () => void;
}

const CandidateFilters = (props: CandidateFiltersProps) => {
  const {
    name,
    setName,
    position,
    setPosition,
    status,
    setStatus,
    experienceYears,
    setExperienceYears,
    positions,
    statusOptions,
    onClickReset,
  } = props;

  const inputSxProps: SxProps = {
    minWidth: { xs: "100%", sm: "calc(50% - 4px)", md: "120px" },
    maxWidth: { xs: "100%", md: "180px" },
  };
  
  return (
    <Stack
      direction="row"
      spacing={[1, null, 2]}
      alignItems="center"
      mb={2}
      flexWrap={"wrap"}
      useFlexGap
    >
      <TextField
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        variant="outlined"
        size="small"
        sx={inputSxProps}
      />
      <FormControl sx={inputSxProps} variant="outlined" size="small">
        <InputLabel>Position</InputLabel>
        <Select
          label="Position"
          value={position}
          onChange={(e) => setPosition(e.target.value as string)}
          disabled={!name}
        >
          <MenuItem value="">
            <em>All</em>
          </MenuItem>
          {positions.map((pos) => (
            <MenuItem key={pos} value={pos}>
              {pos}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl sx={inputSxProps} variant="outlined" size="small">
        <InputLabel>Status</InputLabel>
        <Select
          label="Status"
          value={status}
          onChange={(e) => setStatus(e.target.value as string)}
          disabled={!position}
        >
          <MenuItem value="">
            <em>All</em>
          </MenuItem>
          {statusOptions.map((opt) => (
            <MenuItem key={opt} value={opt}>
              {opt}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <TextField
        label="Years of Experience"
        type="number"
        value={experienceYears}
        onChange={(e) => setExperienceYears(e.target.value)}
        variant="outlined"
        size="small"
        inputProps={{ min: 0 }}
        sx={inputSxProps}
      />
      <Button
        variant="outlined"
        onClick={onClickReset}
        sx={{ flex: 1, minHeight: 40, minWidth: 90 }}
      >
        Reset
      </Button>
    </Stack>
  );
};

export default CandidateFilters;
