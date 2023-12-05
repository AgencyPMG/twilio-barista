import { h, Component } from 'preact';

import TwilioLogo from '../../components/twilio-logo';
import style from './style';
import eventConsts from '../../../shared/event-type-consts';

export default class Kiosk extends Component {
  constructor(...args) {
    super(...args);
    this.state.kioskLoaded = false;
    this.state.kioskInfo = {};
    this.state.error = undefined;
  }

  componentWillMount() {
    const { eventId } = this.props;
    fetch(`/api/kiosk?eventId=${eventId}`)
      .then(resp => {
        if (!resp.ok) {
          throw new Error('Could not fetch kiosk info');
        }
        return resp.json();
      })
      .then(kioskInfo => {
        this.setState({ kioskInfo, kioskLoaded: true });
      })
      .catch(err => {
        console.error(err);
        this.setState({ kioskLoaded: false, error: err.message });
      });
  }

  render() {
    const { kiosk } = eventConsts(this.state.kioskInfo.eventType);
    const loading = <p>Loading...</p>;
    return !this.state.kioskLoaded ? (
      loading
    ) : (
      <div id="kiosk" class={style.kiosk}>
        <h1 class={style.thirsty}>{kiosk.title}</h1>
        <p class={style.hr}>Skip the Queue!</p>
        <div class={style.centerContent}>
          <p>{kiosk.tagLine}</p>
          <p>Send your order via SMS to:</p>
          <div class={style.phoneNumbers}>
            {this.state.kioskInfo.phoneNumbers.slice(0, 4).map(num => (
              <p>
                <a href={"sms:" + num.phoneNumber + "?body=Name%3A%20%3Cinsert%20name%3E%0AOrder%3A%20I%20would%20like%20a%20coffee%20with%20oat%20milk"}>{num.emoji} {num.phoneNumber}</a>
              </p>
            ))}
          </div>
        </div>
        <p class={style.hr}>Menu</p>
        <div>
          {this.state.kioskInfo.menuItems.map((product) => <p class={style.menuItems}>{product}</p>)}
          <p class={style.menuDetails}>{this.state.kioskInfo.menuDetails}</p>
        </div>
        <p class={style.hr}>Syrups</p>
        <div>
          <p class={style.menuItems}>Mocha</p>
          <p class={style.menuItems}>Simple (Sweet)</p>
          <p class={style.menuItems}>Vanilla</p >
          <p class={style.menuItems}>Lavender</p >
          <p class={style.menuItems}>Vanilla (Sugar Free)</p >
          <p class={style.menuItems}>Lavender</p >
        </div>
        <p class={style.hr}>Milk Options</p>
        <div>
            <p class={style.menuItems}>Whole Milk</p>
            <p class={style.menuItems}>Oat Milk</p>
            <p class={style.menuItems}>Almond Milk</p>
            <p class={style.menuItems}>Coconut Milk</p>     
        </div>
        <p class={style.hr}>Enjoy</p>
        <div>
            {this.state.kioskInfo.phoneNumbers.slice(0, 4).map(num => (
              <p>
                <a class="mdl-button mdl-js-ripple-effect mdl-js-button mdl-button--primary mdl-button--raised" href={"sms:" + num.phoneNumber + "?body=Name%3A%20%3Cinsert%20name%3E%0AOrder%3A%20I%20would%20like%20a%20coffee%20with%20oat%20milk"}>Click here to order</a>
              </p>
            ))}
        </div>
      </div>
    );
  }
}
