import FilterIcon from '@mui/icons-material/Filter';
import Typography from '@mui/material/Typography';

import * as S from './styled';
import Text from '@components/Typography/Text';

type SideBarItemProps = {
  label: string;
  description?: string;
};

const SideBarItem: React.FC<SideBarItemProps> = ({ label, description }) => {
  return (
    <S.SideBarItemWrap>
      <S.LabelWrap>
        <Typography variant="subtitle1">{label}</Typography>
        {description ? (
          <Typography variant="caption">{description}</Typography>
        ) : null}
      </S.LabelWrap>
      <S.FilterIconWrap>
        <FilterIcon />
      </S.FilterIconWrap>
    </S.SideBarItemWrap>
  );
};

export default SideBarItem;
