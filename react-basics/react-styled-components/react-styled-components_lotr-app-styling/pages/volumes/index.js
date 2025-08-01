import Link from "next/link";
import { introduction, volumes } from "../../lib/data";
import Image from "next/image";
import styled from "styled-components";

export default function Volumes() {
  return (
    <>
      <StyledTitle>The Lord of the Rings</StyledTitle>
      <StyledIntroduction>{introduction}</StyledIntroduction>
      <StyledVolumes>All Volumes</StyledVolumes>
      <WrappedList>
        {volumes.map((volume) => (
          <ListElement key={volume.id}>
            <TitleLink href={`/volumes/${volume.slug}`}>
              <VolumeImage
                src={volume.cover}
                alt={`Cover image of ${volume.title}`}
                width={84}
                height={138}
              />
              <p>{volume.title}</p>
            </TitleLink>
          </ListElement>
        ))}
      </WrappedList>
    </>
  );
}

const StyledTitle = styled.h1`
  font-size: 45px;
`;

const StyledIntroduction = styled.p`
  margin-bottom: 60px;
`;

const StyledVolumes = styled.h2`
  font-size: 30px;
`;

const WrappedList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  padding: 0;
`;

const ListElement = styled.li`
  display: flex;

  flex-direction: column;
  width: 84px;
  flex-wrap: wrap;
`;

const VolumeImage = styled(Image)`
  box-shadow: var(--box-shadow-book);

  &:hover {
    box-shadow: var(--box-shadow-book--hover);
  }
`;

const TitleLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 12px;
`;
