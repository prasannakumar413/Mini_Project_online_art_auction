package com.srs.dao;

import com.srs.model.Train;
import java.util.List;

public interface TrainDao {
    void create(Train train);
    List<Train> read();
    void update(Train train);
    void delete(int trainId);
    Train readById(int trainId);
}
