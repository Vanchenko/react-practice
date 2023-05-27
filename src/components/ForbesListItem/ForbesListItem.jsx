import { BiDollarCircle } from 'react-icons/bi';
import { FcBullish, FcBearish } from 'react-icons/fc';
import { ForbesItem, Avatar, Name, Capital } from './ForbesListItem.styled';

import { theme } from 'styles/theme';

export const ForbesListItem = ({
  name,
  capital,
  avatar = "https://media.istockphoto.com/id/1294915041/photo/3d-illustration-of-standing-man-with-arms-crossed-portrait-of-cartoon-smiling-male-character.jpg?b=1&s=612x612&w=0&k=20&c=KcxuxISXtUfUURU8D9vZhKJSU2wUX0o-JOHsEB_nces=",
  isIncrease,
}) => {
  return (
    <ForbesItem>
      <Avatar src={avatar} alt={name} />
      <Name>{name}</Name>
      <Capital>
        {capital} <BiDollarCircle color={theme.colors.accent} size={22} />
        {isIncrease ? <FcBullish /> : <FcBearish />}
      </Capital>
    </ForbesItem>
  );
};

