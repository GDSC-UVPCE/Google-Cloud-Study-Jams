// components/BadgeComponent.js

import React, { Component } from 'react';
import gdgImage from '@/assets/img/badge.png';


    class BadgeComponent extends Component {
        constructor(props) {
          super(props);
          this.state = {
            downloadbtn: false,
            canvas: null,
            shape: "original",
            image: "",
            shapeData: "original",
            ctx: null,
            banner: null
          };
        }
      
        componentDidMount() {
          document.title = "Badges | DevFest India 2023";
          this.canvas = document.querySelector("canvas");
          this.ctx = this.canvas.getContext("2d");
          this.image = "";
          this.shape = "original";
          this.setState({ downloadbtn: false });
          document.getElementById("download").style.visibility = "hidden";
          this.banner = new Image();
          this.banner.src = gdgImage;
          this.banner.onload = () => {
            this.draw();
          };
        }
      
        upload = (e) => {
          if (e && e.target.files && e.target.files[0]) {
            const reader = new FileReader();
            reader.onload = (event) => {
              const img = new Image();
              img.onload = () => {
                this.setState({ image: img });
                this.draw();
              };
              img.src = event.target.result;
            };
            reader.readAsDataURL(e.target.files[0]);
          }
        };
      
        uploadImage = () => {
          document.querySelector("input.profile-input").click();
          this.setState({ downloadbtn: true });
          document.getElementById("download").style.visibility = "visible";
        };
      
        changeShape = (type) => {
          this.setState({ shape: type });
          this.draw();
        };
      
        draw = () => {
          const { image, shape, canvas, ctx, banner } = this.state;
          if (image) {
            switch (shape) {
              case "original": {
                canvas.width = image.width;
                canvas.height = image.height;
                ctx.drawImage(image, 0, 0);
                break;
              }
              default: {
                canvas.width = 2500;
                canvas.height = 2500;
                const hRatio = canvas.width / image.width;
                const vRatio = canvas.height / image.height;
                const ratio = Math.max(hRatio, vRatio);
                const x = (canvas.width - image.width * ratio) / 2;
                const y = (canvas.height - image.height * ratio) / 2;
                ctx.drawImage(
                  image,
                  0,
                  0,
                  image.width,
                  image.height,
                  x,
                  y,
                  image.width * ratio,
                  image.height * ratio
                );
                break;
              }
            }
          } else {
            ctx.canvas.width = 2500;
            ctx.canvas.height = 2500;
            ctx.fillStyle = "#fff";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
          }
          const height = (banner.height / banner.width) * canvas.width;
          const y = canvas.height - height;
          const fontSize = canvas.width / 17.2;
          ctx.drawImage(
            banner,
            0,
            0,
            banner.width,
            banner.height,
            0,
            y,
            canvas.width,
            height
          );
          ctx.fillStyle = "#757575";
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.font = `${fontSize}px Google Sans, sans-serif`;
          if (shape === "circle") {
            ctx.globalCompositeOperation = "destination-in";
            ctx.beginPath();
            ctx.arc(canvas.width / 2, canvas.height / 2, canvas.height / 2, 0, Math.PI * 2);
            ctx.closePath();
            ctx.fill();
          }
        };
      
        download = () => {
          const a = document.createElement("a");
          const { canvas } = this.state;
          const url = canvas.toDataURL("image/png;base64");
          a.download = "#DevFestIndia_badge.png";
          a.href = url;
          a.click();
        };
      
        render() {
          return (
            <div className="container mx-auto p-5">
              <div className="md:flex">
                {/* Left Column */}
                <div className="md:w-1/2 px-7 mt-3 mb-13">
                  {/* Rest of your JSX code */}
                  {/* ... */}
                </div>
      
                {/* Right Column */}
                <div className="md:w-1/2 sm:w-full text-center py-10 py-5">
                  {/* Rest of your JSX code */}
                  {/* ... */}
                </div>
              </div>
            </div>
          );
        }
}

export default BadgeComponent;
