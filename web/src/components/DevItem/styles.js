import styled from '@emotion/styled';

export const DevContainer = styled.li`
  background-color: #fff;
  box-shadow: 0 0 14px rgba(0, 0, 0, 0.02);
  border-radius: 2px;
  padding: 20px;
`;

export const DevHeader = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;

  & img {
    width: 54px;
    height: 54px;
    border-radius: 50%;
  }
`;

export const DevUserInfo = styled.div`
  margin-left: 10px;
`;

export const DevBio = styled.p`
  color: #666;
  font-size: 14px;
  line-height: 20px;
  margin: 10px 0;
`;

export const Link = styled.a`
  color: #8e4dff;
  font-size: 14px;
  text-decoration: none;

  &:hover {
    color: #5a2ea6;
  }
`;

export const DevName = styled.strong`
  display: block;
  font-size: 16px;
  color: #333;
`;

export const DevTechs = styled.span`
  font-size: 13px;
  color: #999;
  margin-top: 2px;
`;
