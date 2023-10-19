import { Button, IconButton, Checkbox } from "@chakra-ui/react";
import styles from "./app1.module.css";

const App1 = () => {
  return (
    <div className={styles.app}>
      <div className={styles.frame}>
        <header className={styles.topHeader}>
          <div className={styles.topContainer}>
            <div className={styles.locouiLogo}>
              <img
                className={styles.locouiLogoIcon}
                alt=""
                src="/locouilogo.svg"
              />
              <div className={styles.locouiParent}>
                <img className={styles.locouiIcon} alt="" src="/locoui.svg" />
                <div className={styles.byTeamLocofy}>by Team Locofy</div>
              </div>
            </div>
            <div className={styles.navigationRight}>
              <div className={styles.navigationMenu}>
                <button className={styles.button}>
                  <div className={styles.button1}>Explore</div>
                </button>
                <button className={styles.button2}>
                  <div className={styles.button3}>Search</div>
                </button>
                <button className={styles.button2}>
                  <div className={styles.button3}>Hotels</div>
                </button>
                <button className={styles.button2}>
                  <div className={styles.button3}>Offers</div>
                </button>
              </div>
              <div className={styles.accountSection}>
                <img
                  className={styles.hamburgerMenuIcon}
                  alt=""
                  src="/notification.svg"
                />
                <img
                  className={styles.notificationBellIcon}
                  alt=""
                  src="/notification1.svg"
                />
                <img
                  className={styles.profilePictureIcon}
                  alt=""
                  src="/top_avatar@2x.png"
                />
              </div>
            </div>
          </div>
        </header>
        <div className={styles.filter}>
          <div className={styles.coteg}>
            <div className={styles.androidtab}>
              <Button
                name="Tab5"
                id="option5"
                variant="ghost"
                colorScheme="teal"
              >
                أرحبي
              </Button>
            </div>
            <div className={styles.androidtab}>
              <Button
                name="Tab4"
                id="option4"
                variant="ghost"
                colorScheme="teal"
              >
                همداني
              </Button>
            </div>
            <div className={styles.androidtab}>
              <Button
                name="Tab3"
                id="option3"
                variant="ghost"
                colorScheme="teal"
              >
                صعدي
              </Button>
            </div>
            <div className={styles.androidtab}>
              <Button
                name="Tab2"
                id="option2"
                variant="ghost"
                colorScheme="teal"
              >
                قطيني
              </Button>
            </div>
            <div className={styles.androidtab}>
              <Button
                name="Tab1"
                id="option1"
                variant="ghost"
                colorScheme="teal"
              >
                عنسي
              </Button>
            </div>
          </div>
          <div className={styles.coteg}>
            <Checkbox
              colorScheme="teal"
              name="less2000"
              id="ceckbox4"
            >{`< 2000`}</Checkbox>
            <Checkbox
              colorScheme="teal"
              name="up2000"
              id="ceckbox3"
            >{`> 2000`}</Checkbox>
            <Checkbox
              colorScheme="teal"
              name="up500"
              id="ceckbox2"
            >{`> 5000`}</Checkbox>
            <Checkbox
              colorScheme="teal"
              name="up1000"
              id="ceckbox1"
            >{`> 10000`}</Checkbox>
          </div>
        </div>
      </div>
      <div className={styles.list}>
        <div className={styles.item01}>
          <div className={styles.headcrad}>
            <img className={styles.imageIcon} alt="" src="/image@2x.png" />
          </div>
          <div className={styles.headlinecard}>
            <div className={styles.group2}>
              <div className={styles.title}>أرحبي</div>
              <div className={styles.count}>ربع كيلو</div>
            </div>
            <a className={styles.price1}>20000 ريال</a>
          </div>
        </div>
        <div className={styles.item01}>
          <div className={styles.headcrad}>
            <img className={styles.imageIcon} alt="" src="/image1@2x.png" />
          </div>
          <div className={styles.headlinecard}>
            <div className={styles.group2}>
              <div className={styles.title}>Digital Products</div>
              <div className={styles.count}>20 items</div>
            </div>
            <a className={styles.price1}>View all</a>
          </div>
        </div>
        <div className={styles.item01}>
          <div className={styles.headcrad}>
            <img className={styles.imageIcon} alt="" src="/image1@2x.png" />
          </div>
          <div className={styles.headlinecard}>
            <div className={styles.group2}>
              <div className={styles.title}>Digital Products</div>
              <div className={styles.count}>20 items</div>
            </div>
            <a className={styles.price1}>View all</a>
          </div>
        </div>
        <div className={styles.item01}>
          <div className={styles.headcrad}>
            <img className={styles.imageIcon} alt="" src="/image1@2x.png" />
          </div>
          <div className={styles.headlinecard}>
            <div className={styles.group2}>
              <div className={styles.title}>Digital Products</div>
              <div className={styles.count}>20 items</div>
            </div>
            <a className={styles.price1}>View all</a>
          </div>
        </div>
        <div className={styles.item01}>
          <div className={styles.headcrad}>
            <img className={styles.imageIcon} alt="" src="/image1@2x.png" />
          </div>
          <div className={styles.headlinecard}>
            <div className={styles.group2}>
              <div className={styles.title}>Digital Products</div>
              <div className={styles.count}>20 items</div>
            </div>
            <a className={styles.price1}>View all</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App1;
