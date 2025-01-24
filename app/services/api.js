// services/api.js
import Service from '@ember/service';
import { inject as service } from '@ember/service';
import fetch from 'fetch';
import axios from 'axios';

export default class ApiService extends Service {
  async fetchTeamData() {
    const response = await fetch('https://loopback3-d187efbb3356.herokuapp.com/api/teams');
    return response.json();
  }

  async fetchTeamMembersData(id, filterData) {
    const response = await axios.get(`https://loopback3-d187efbb3356.herokuapp.com/api/teams/${id}`, {
      params: {
        filter: filterData,
      },
    });
    return response.data;
  }
}
