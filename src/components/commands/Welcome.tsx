import {
  Cmd,
  HeroContainer,
  Link,
  PreName,
  PreNameMobile,
  PreWrapper,
  Seperator,
} from "../styles/Welcome.styled";

const Welcome: React.FC = () => {
  return (
    <HeroContainer data-testid="welcome">
      <div className="info-section">
        <PreName>
          {`        
 $$$$$$\  $$$$$$\ $$$$$$$\  $$\                                               
$$  __$$\ \_$$  _|$$  __$$\ $$ |                                              
$$ /  $$ |  $$ |  $$ |  $$ |$$$$$$$\   $$$$$$\  $$\   $$\  $$$$$$\   $$$$$$\  
$$$$$$$$ |  $$ |  $$$$$$$  |$$  __$$\  \____$$\ $$ |  $$ |$$  __$$\ $$  __$$\ 
$$  __$$ |  $$ |  $$  __$$< $$ |  $$ | $$$$$$$ |$$ |  $$ |$$$$$$$$ |$$ |  \__|
$$ |  $$ |  $$ |  $$ |  $$ |$$ |  $$ |$$  __$$ |$$ |  $$ |$$   ____|$$ |      
$$ |  $$ |$$$$$$\ $$ |  $$ |$$$$$$$  |\$$$$$$$ |\$$$$$$  |\$$$$$$$\ $$ |      
\__|  \__|\______|\__|  \__|\_______/  \_______| \______/  \_______|\__|                                                                                
          `}
        </PreName>
        <PreWrapper>
          <PreNameMobile>
            {`
 __      ___ _    
 \ \    / (_) |   
  \ \  / / _| | __
   \ \/ / | | |/ /
    \  /  | |   < 
     \/   |_|_|\_\
                  
                  
          `}
          </PreNameMobile>
        </PreWrapper>
        <div>Welcome to my terminal portfolio. (Version 1.3.1)</div>
        <Seperator>----</Seperator>
        <div>
          This project's source code can be found in this project's{" "}
          <Link href="https://github.com/airbauer/airbauer.ch">
            GitHub repo
          </Link>
          .
        </div>
        <Seperator>----</Seperator>
        <div>
          For a list of available commands, type `<Cmd>help</Cmd>`.
        </div>
      </div>

    </HeroContainer>
  );
};

export default Welcome;
