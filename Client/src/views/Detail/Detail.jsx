import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailCard from "../../components/DetailCard/DetailCard";
import Nav from "../../components/Nav/Nav";
import style from "./Detail.module.css";
import { useDispatch, useSelector } from "react-redux";
import { detailCard } from "../../redux/actions/actions";

const Detail = ({ setUsers }) => {
  const [creado, setCreado] = useState('')
  const character = useSelector(state => state.detailCard)
  const dispatch = useDispatch()


  const { id } = useParams();

  useEffect(() => {
    dispatch(detailCard(id))

    return () => {
      dispatch(detailCard({}))
    }

  }, [id]);

  useEffect(() => {
    const createdDate = character.created ? character.created.slice(0, 10) : '';
    setCreado(createdDate);
    console.log(createdDate);
  }, [character])
  

  return (
    <>
      <Nav setUsers={setUsers} />
      <div className={style.container}>
        <DetailCard character={character} creado={creado}/>
      </div>
    </>
  );
};

export default Detail;
