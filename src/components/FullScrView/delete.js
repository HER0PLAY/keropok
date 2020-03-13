import { Platform } from 'react-native';
import Share from 'react-native-share';

const url = 'https://awesome.contents.com/';
const title = 'Awesome Contents';
const message = 'Please check this out.';
const options = Platform.select({
  ios: {
    activityItemSources: [
      {
        placeholderItem: { type: 'url', content: url },
        item: {
          default: { type: 'url', content: url },
        },
        subject: {
          default: title,
        },
        linkMetadata: { originalUrl: url, url, title },
      },
      {
        placeholderItem: { type: 'text', content: message },
        item: {
          default: { type: 'text', content: message },
          message: null, // Specify no text to share via Messages app.
        },
      },
    ],
  },
  default: {
    title,
    subject: title,
    message: `${message} ${url}`,
  },
});

Share.open(options);