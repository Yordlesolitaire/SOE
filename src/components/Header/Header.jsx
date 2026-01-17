




export default function Header({ device }) {
  const { isMobile, isPortrait } = device;

  return isMobile ? <h1>Mobile</h1> : <h1>Desktop</h1>;
}
