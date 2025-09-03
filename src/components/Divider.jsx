import { Box } from '@chakra-ui/react';

export default function Divider(props) {
  return (
    <Box
      borderBottom="1px solid"
      borderColor="whiteAlpha.300"
      {...props}
    />
  );
}
