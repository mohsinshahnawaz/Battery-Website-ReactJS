import React, { useEffect, useState } from "react";
import { Box, Button, Input, TextField } from "@mui/material";
import { Slide } from "react-slideshow-image";
import ImageGallery from "react-image-gallery";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import { CardsData } from "../../../../src/dummy-data/data";
import "./BatteriesDetails.css";
import CustomCounter from "../../common/custom-counter/CustomCounter";
import FavoriteIcon from "@mui/icons-material/Favorite";
import JoHnPicture from "../../../assets/images/john-cameron.jpg";
import JoHnPicture2 from "../../../assets/images/john-cameron-two.jpg";
import Battery1 from "../../../assets/images/cell-one.jpg";
import Battery2 from "../../../assets/images/cell-two.jpg";
import Battery3 from "../../../assets/images/cell-three.jpg";
import Battery4 from "../../../assets/images/cell-four.jpg";
import CollectionsIcon from "@mui/icons-material/Collections";
import CollectionsBookmarkIcon from "@mui/icons-material/CollectionsBookmark";
import CustomRadioButton from "../../common/custom-radio-group/CustomRadioButton";
export default function BatteriesDetails() {
  const [selectedValue, setSelectedValue] = useState(null);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const [formData, setFormData] = useState({
    nickname: "",
    summary: "",
    review: "",
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formDataObject = new FormData(e.target);

    setFormData({
      nickname: formDataObject.get("nickname"),
      summary: formDataObject.get("summary"),
      review: formDataObject.get("review"),
    });
  };
  const [tagData, setTagData] = useState("");
  const handleTagSubmit = (e) => {
    e.preventDefault();
    const formDataObject = new FormData(e.target);

    setTagData(formDataObject.get("addYourTag"));
  };

  const handleNextCard = () => {
    slideRef.current.goNext();
  };

  const handlePrevCard = () => {
    slideRef.current.goBack();
  };

  const slideRef = React.createRef();
  const properties = {
    duration: 5000,
    autoplay: false,
    transitionDuration: 500,
    arrows: false,
    infinite: true,
    easing: "ease",
  };
  const [quantity, setQuantity] = useState(0);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };
  const [quantities, setQuantities] = useState({});

  const products = [
    { id: 65, name: "BOKE 24V 7.8Ah battery", price: "₡113,000.00" },
    { id: 66, name: "BOKE 24V 10.4Ah battery", price: "₡126,000.00" },
    { id: 67, name: "BOKE 24V 13Ah battery", price: "₡139,000.00" },
    { id: 68, name: "BOKE 24V 15.6Ah battery", price: "₡152,000.00" },
    { id: 69, name: "BOKE 24V 18.2Ah battery", price: "₡165,000.00" },
    { id: 70, name: "BOKE 24V 21Ah battery", price: "₡178,000.00" },
  ];
  const handleQtyChange = (productId, event) => {
    const newQuantities = { ...quantities, [productId]: event.target.value };
    setQuantities(newQuantities);
  };

  const disableDecrement = quantity === 0;
  const slideImages = [
    {
      id: "1",
      images: [
        {
          original: JoHnPicture,
          thumbnail: JoHnPicture,
        },
        {
          original: JoHnPicture2,
          thumbnail: JoHnPicture2,
        },
      ],
      data: (
        <Box className="right-details">
          <h3>BOKE BATTERY 48V 10.4AH</h3>
          <Box class="product-details">
            <div className="first-comment">
              <p>Be the first to comment on this product</p>

              <p>
                Illustrative image * battery.size according to indicated
                specification
              </p>
            </div>
            <p>Features:</p>
            <p>Maximum voltage: 54.6V</p>
            <p>Rated voltage: 48V</p>
            <p>Output cut-off voltage: 41.6V</p>
            <p>Type: BOKE 18650 BD lithium cell</p>
            <p>Service life: 1000 cycle</p>
            <p>Material: PC + ABS</p>
            <p>Charging port: DC2.1</p>
            <p>Download port: 4 pin</p>
            <p>Insurance: mechanical with key</p>
            <p>Charging indicator: 4-level LED</p>
          </Box>
          <Box>
            <span>SKU: </span>Bateria Boke 48v 10.4AH
          </Box>
          <Box>
            <p className="availability">Availability: In stock</p>
          </Box>
          <Box className="price-box">
            <span className="regular-price">
              <span className="price">₡201.000,00</span>
            </span>
          </Box>
        </Box>
      ),
    },
    {
      id: "2",
      images: [
        {
          original: Battery1,
          thumbnail: Battery1,
        },
        {
          original: Battery2,
          thumbnail: Battery2,
        },
        {
          original: Battery3,
          thumbnail: Battery3,
        },
        {
          original: Battery4,
          thumbnail:Battery4,
        },
      ],
      data: (
        <Box className="right-details">
          <h3>BOKE BATTERY 48V 10.4AH</h3>
          <Box class="product-details">
            <div className="first-comment">
              <p>Be the first to comment on this product</p>

              <p>
                Illustrative image * battery.size according to indicated
                specification
              </p>
            </div>
            <p>Features:</p>
            <p>Maximum voltage: 54.6V</p>
            <p>Rated voltage: 48V</p>
            <p>Output cut-off voltage: 41.6V</p>
            <p>Type: BOKE 18650 BD lithium cell</p>
            <p>Service life: 1000 cycle</p>
            <p>Material: PC + ABS</p>
            <p>Charging port: DC2.1</p>
            <p>Download port: 4 pin</p>
            <p>Insurance: mechanical with key</p>
            <p>Charging indicator: 4-level LED</p>
          </Box>
          <Box>
            <span>SKU: </span>Bateria Boke 48v 10.4AH
          </Box>
          <Box>
            <p className="availability">Availability: In stock</p>
          </Box>
          <Box className="price-box">
            <span className="regular-price">
              <span className="price">₡201.000,00</span>
            </span>
          </Box>
        </Box>
      ),
    },
    {
      id: "3",
      images: [
        {
          original: Battery1,
          thumbnail:Battery1
        },
      ],
      data: (
        <Box className="right-details">
          <h3>BOKE BATTERY 48V 10.4AH</h3>
          <Box class="product-details">
            <div className="first-comment">
              <p>Be the first to comment on this product</p>

              <p>
                Illustrative image * battery.size according to indicated
                specification
              </p>
            </div>
            <p>Features:</p>
            <p>Maximum voltage: 54.6V</p>
            <p>Rated voltage: 48V</p>
            <p>Output cut-off voltage: 41.6V</p>
            <p>Type: BOKE 18650 BD lithium cell</p>
            <p>Service life: 1000 cycle</p>
            <p>Material: PC + ABS</p>
            <p>Charging port: DC2.1</p>
            <p>Download port: 4 pin</p>
            <p>Insurance: mechanical with key</p>
            <p>Charging indicator: 4-level LED</p>
          </Box>
          <Box>
            <span>SKU: </span>Bateria Boke 48v 10.4AH
          </Box>
          <Box>
            <p className="availability">Availability: In stock</p>
          </Box>
          <Box className="price-box">
            <table
              className="data-table grouped-items-table"
              id="super-product-table"
            >
              <colgroup>
                <col />
                <col />
                <col width="1" />
              </colgroup>
              <thead>
                <tr className="first last">
                  <th>Product name</th>
                  <th className="a-right">Price</th>
                  <th className="a-center">Qty</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr
                    key={product.id}
                    className={product.id % 2 === 0 ? "even" : "odd"}
                  >
                    <td>{product.name}</td>
                    <td className="a-right">
                      <div className="price-box">
                        <span
                          className="regular-price"
                          id={`product-price-${product.id}`}
                        >
                          <span className="price-table">{product.price}</span>
                        </span>
                      </div>
                    </td>
                    <td className="a-center last">
                      <input
                        type="text"
                        name={`super_group[${product.id}]`}
                        maxLength="12"
                        value={quantities[product.id] || ""}
                        onChange={(e) => handleQtyChange(product.id, e)}
                        title="Qty"
                        className="input-text qty"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Box>
        </Box>
      ),
    },
  ];

  const renderItem = (item) => {
    return (
      <div className="image-gallery-image">
        <img
          src={item.original}
          alt={item.originalAlt}
          srcSet={item.srcSet}
          sizes={item.sizes}
          className="image-gallery-image"
        />
      </div>
    );
  };
  useEffect(() => {
    console.log("formData", tagData);
  }, [tagData]);
  return (
    <Box className="Batteries-Details-container">
      <Box>
        <Box className="Batteries-heading">
          <Box className="slide-container">
            <Slide ref={slideRef} {...properties}>
              {slideImages.map((each, index) => {
                return (
                  <Box key={index} className="each-slide">
                    <ImageGallery
                      items={each?.images}
                      autoPlay={false}
                      showPlayButton={false}
                      showNav={false}
                      renderItem={renderItem}
                      disableSwipe={true}
                    />
                    <Box className="right-set">
                      <Box className="right-side">
                        {each.data}

                        <Box className="arrows">
                          <Box className="icons" onClick={handlePrevCard}>
                            <ArrowBackOutlinedIcon />
                          </Box>
                          <Box className="icons" onClick={handleNextCard}>
                            <ArrowForwardOutlinedIcon />
                          </Box>
                        </Box>
                      </Box>

                      <Box className="counter">
                        {each.id !== "3" && (
                          <CustomCounter
                            quantity={quantity}
                            handleIncrement={handleIncrement}
                            handleDecrement={handleDecrement}
                            disableDec={disableDecrement}
                          />
                        )}
                        <Box className="counters">
                          <Button>Buy</Button>
                        </Box>
                      </Box>
                      <Box className="icon-text">
                        <Box className="icon-button">
                          <FavoriteIcon />
                          <p className="icon-btn-text">Add to list</p>
                        </Box>
                        <Box className="icon-button bookmark">
                          <CollectionsBookmarkIcon />
                          <p className="icon-btn-text">Compare</p>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                );
              })}
            </Slide>
            <Box className="radio-btn">
              <CustomRadioButton
                setSelectedValue={setSelectedValue}
                selectedValue={selectedValue}
              />
            </Box>
            {selectedValue == "productDetails" && (
              <Box className="radio-details">
                <p>
                  Large capacity design with long useful life and manufactured
                  with high quality components. Widely used for electric
                  bicycles, skateboards, scooters, mountain bikes and more. This
                  battery is used as a replacement for existing electric bicycle
                  systems of various brands. Since there is a wide variety of
                  electric bicycles, connection compatibility with yours cannot
                  be guaranteed, but we can adapt it ourselves for an additional
                  cost.
                </p>
              </Box>
            )}
            {selectedValue == "additionalInformation" && (
              <Box className="radio-additional-information">
                <p>ADDITIONAL INFORMATION</p>
                <hr />
                <Box className="delivery">
                  <span>Delivery:</span>
                  <p>3-8 business days</p>
                </Box>
              </Box>
            )}
            {selectedValue == "reviewsOfThisProduct" && (
              <Box className="radio-review-information">
                <p>WRITE YOUR OWN REVIEW</p>
                <hr />
                <Box className="review">
                  <p>You're reviewing: Samsung battery 48v 12Ah:</p>

                  <Box
                    className="review-form"
                    component="form"
                    onSubmit={handleFormSubmit}
                  >
                    <TextField name="nickname" label="Nickname" />
                    <TextField name="summary" label="Summary of Your Review" />
                    <TextField
                      name="review"
                      multiline
                      rows={4}
                      label="Review"
                    />
                  </Box>
                  <Box className="counters submit-review">
                    <Button type="submit">Submit Review</Button>
                  </Box>
                </Box>
              </Box>
            )}
            {selectedValue == "productLabels" && (
              <Box className="radio-review-information">
                <Box className="Product">
                  <Box
                    className="product-form"
                    component="form"
                    onSubmit={handleTagSubmit}
                  >
                    <TextField
                      style={{ width: "30%" }}
                      name="addYourTag"
                      label="Add Your Tags"
                    />
                    <Box className="counters submit-review">
                      <Button type="submit">Add Tags</Button>
                    </Box>
                  </Box>
                </Box>
                <p>
                  Use spaces to separate tags. Use single quotes (') for
                  phrases.
                </p>
              </Box>
            )}
            {selectedValue == "cmsTags" && (
              <Box className="Cms-details">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Be
                  alert. Mauris eleifend, quam a vulputate dictum, massa quam
                  dapibus leo, eget vulputate orci purus ut lorem. In fringilla
                  mi in ligula. Pellentesque aliquam quam vel dolor. Never
                  adipiscing. Sed quam odio, tempus ac, aliquam molestie, varius
                  ac, tellus. Vestibulum ut nulla aliquam risus rutrum
                  interdumLorem ipsum dolor sit amet,
                </p>
              </Box>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
