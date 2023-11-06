import React, { useState } from "react";
import Picture from "./Picture";
import "../index.css";
import { useDrop } from "react-dnd";

const PictureList = [
  {
    id: 1,
    url: "https://yt3.ggpht.com/ytc/AAUvwnjOQiXUsXYMs8lwrd4litEEqXry1-atqJavJJ09=s900-c-k-c0x00ffffff-no-rj",
  },
  {
    id: 2,
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8CldTqNpzN9ENCGC79zNXg6EfcqEHXTLjQg&usqp=CAU",
  },
  {
    id: 3,
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPk0qGK-v8w1d6H-9iW1HyB82fbV5BClCgbQ&usqp=CAU",
  },
];

const DragDrop = () => {
  const [board, setBoard] = useState([]);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "image",
    drop: (item) => addImageToBoard(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addImageToBoard = (id) => {
    const pictureList = PictureList.filter((picture) => id === picture.id);
    setBoard((board) => [...board], pictureList[0]);
  };

  return (
    <>
      <div className="Pictures">
        {PictureList.map((picture) => (
          <Picture key={picture.id} url={picture.url} id={picture.id} />
        ))}
      </div>
      <div className="Board" ref={drop}>
        {board.map((picture) => (
          <Picture key={picture.id} url={picture.url} id={picture.id} />
        ))}
      </div>
    </>
  );
};

export default DragDrop;
