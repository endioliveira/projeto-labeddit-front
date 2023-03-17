import api from "../../services/api";
import React from "react";
import { useParams } from "react-router-dom";
import {
  Container,
  BoxComments,
  LikeOrDislike,
  Like,
  Dislike,
} from "./CommentsStyled";

export const Comments = ({comment, setPost}) => {
  const params = useParams()

  const like = async (e) => {
    e.preventDefault();

    const body = {
      like: true,
      commentId: comment.id
    };

    await api.put(`/posts/${params.id}/comment/like`, body).then(() => {
        api
          .get(`/posts/${params.id}`)
          .then((response) => {
            setPost(response.data);
          })
          .catch((error) => {
            console.error(error?.response?.data);
            window.alert(error?.response?.data);
          });
    });
  };

  return (
    <>
      <Container>
        <BoxComments>
          <span>Enviado por: {comment.nickname}</span>
          <p>
            {comment.content}
          </p>
          <LikeOrDislike>
            <Like onClick={like}>
              <svg
                width="15"
                height="17"
                viewBox="0 0 15 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.0907 1.53713C6.8225 0.613067 8.22424 0.611341 8.95802 1.53392L14.0656 7.95525C14.8336 8.92047 14.1538 10.3466 12.9207 10.3587L11.533 10.3725L11.5318 15.0372C11.5317 15.2776 11.4843 15.5156 11.3922 15.7377C11.3001 15.9598 11.1652 16.1616 10.9951 16.3315C10.825 16.5014 10.6231 16.6361 10.4009 16.728C10.1787 16.8198 9.94059 16.867 9.70017 16.8668L5.34189 16.8628C4.85693 16.8623 4.39202 16.6692 4.04929 16.3261C3.70655 15.983 3.51402 15.5179 3.51398 15.033L3.51349 10.3735L2.15809 10.3727C0.919519 10.372 0.228632 8.94266 0.996914 7.97177L6.0907 1.53713ZM8.27576 2.07618C8.18587 1.96317 8.07161 1.87192 7.94151 1.80926C7.81141 1.74659 7.66884 1.71413 7.52443 1.7143C7.38003 1.71447 7.23753 1.74725 7.10758 1.81022C6.97762 1.87318 6.86357 1.96468 6.77394 2.07791L1.68016 8.51255C1.36392 8.91259 1.64812 9.50094 2.15833 9.50143L3.94951 9.50217C4.00674 9.50216 4.06341 9.51343 4.11629 9.53533C4.16916 9.55722 4.21721 9.58932 4.25767 9.62979C4.29814 9.67026 4.33024 9.7183 4.35214 9.77117C4.37403 9.82405 4.3853 9.88072 4.38529 9.93795L4.38505 15.033C4.38512 15.287 4.48604 15.5307 4.66564 15.7103C4.84523 15.89 5.08882 15.9911 5.34287 15.9913L9.70116 15.9952C9.82708 15.9953 9.95178 15.9706 10.0681 15.9225C10.1845 15.8744 10.2903 15.8038 10.3793 15.7148C10.4684 15.6258 10.5391 15.5201 10.5873 15.4038C10.6356 15.2875 10.6604 15.1628 10.6605 15.0369L10.6617 9.94091C10.6617 9.82609 10.707 9.71591 10.7877 9.63431C10.8685 9.5527 10.9782 9.50628 11.093 9.50513L12.9121 9.48738C13.4198 9.48245 13.6996 8.89509 13.3836 8.49776L8.27576 2.07618Z"
                  fill="#6F6F6F"
                />
              </svg>
            </Like>
            {comment.likes}
            <Dislike>
              <svg
                width="15"
                height="17"
                viewBox="0 0 15 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.9093 15.3491C8.1775 16.2731 6.77576 16.2748 6.04198 15.3523L0.934398 8.93093C0.166363 7.96571 0.846159 6.53957 2.07931 6.52749L3.46699 6.51369L3.46823 1.84903C3.46828 1.60861 3.51571 1.37055 3.6078 1.14847C3.69989 0.92638 3.83483 0.724616 4.00493 0.554704C4.17502 0.384792 4.37693 0.250062 4.59912 0.158211C4.8213 0.0663617 5.05941 0.0191922 5.29983 0.0193987L9.65811 0.0233419C10.1431 0.0239048 10.608 0.216938 10.9507 0.560042C11.2934 0.903145 11.486 1.36826 11.486 1.85322L11.4865 6.5127L12.8419 6.51344C14.0805 6.51418 14.7714 7.94353 14.0031 8.91442L8.9093 15.3491ZM6.72424 14.81C6.81413 14.923 6.92839 15.0143 7.05849 15.0769C7.18859 15.1396 7.33116 15.1721 7.47557 15.1719C7.61997 15.1717 7.76247 15.1389 7.89242 15.076C8.02238 15.013 8.13643 14.9215 8.22606 14.8083L13.3198 8.37364C13.6361 7.9736 13.3519 7.38525 12.8417 7.38475L11.0505 7.38401C10.9933 7.38402 10.9366 7.37276 10.8837 7.35086C10.8308 7.32896 10.7828 7.29686 10.7423 7.25639C10.7019 7.21593 10.6698 7.16788 10.6479 7.11501C10.626 7.06214 10.6147 7.00546 10.6147 6.94824L10.615 1.85322C10.6149 1.59916 10.514 1.35553 10.3344 1.17584C10.1548 0.996147 9.91118 0.895102 9.65713 0.8949L5.29884 0.890957C5.17292 0.890862 5.04822 0.915579 4.93185 0.963693C4.81548 1.01181 4.70974 1.08238 4.62065 1.17137C4.53157 1.26037 4.46089 1.36604 4.41265 1.48236C4.36442 1.59867 4.33958 1.72335 4.33954 1.84928L4.33831 6.94528C4.33833 7.06009 4.29303 7.17028 4.21226 7.25188C4.13149 7.33348 4.02177 7.3799 3.90696 7.38106L2.08793 7.3988C1.58018 7.40373 1.30042 7.9911 1.61641 8.38843L6.72424 14.81Z"
                  fill="#6F6F6F"
                />
              </svg>
            </Dislike>
          </LikeOrDislike>
        </BoxComments>
      </Container>
    </>
  );
};
