import Vue from 'vue';
import {Button, Avatar, Form, Input, Icon,Radio,Select,Divider,Menu,Anchor,Pagination} from 'ant-design-vue';
import {LocaleProvider, Layout, Row, Col} from 'ant-design-vue';

import {demandLoad} from '../utils/demandLoad';

let aComponents = [
  Button,
  LocaleProvider,
  Layout,
  Layout.Header,
  Layout.Content,
  Layout.Sider,
  Layout.Footer,
  Avatar,
  Form,
  Form.Item,
  Radio,
  Radio.Group,
  Radio.Button,
  Select,
  Select.Option,
  Menu,
  Menu.Item,
  Menu.SubMenu,
  Anchor,
  Anchor.Link,
  Pagination,
  Divider,
  Input,
  Icon,
  Row,
  Col,
];

demandLoad (Vue, aComponents);
Vue.prototype.$form = Form;
